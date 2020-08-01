<template>
  <div>
    <input v-model="username" type="text" />
    <div class="box-chat">
      <div class="name-group">name room</div>
      <div class="content-box">
        <div class="box">
          <div v-if="messageOld.length" class="message">
            <div v-for="(mes, index) in messageOld" :key="index">
              <div v-if="mes.username == username" class="my-message">
                <p>{{ mes.content }}</p>
              </div>
              <div v-else class="your-message">
                <p>{{ mes.content }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="typing">
          <input
            v-model="message.content"
            type="text"
            class="typing__chat"
            @keyup.enter="onSubmit()"
          />
        </div>
      </div>
    </div>
    <!-- <textarea id="" v-model="messageOld" name="" cols="30" rows="10"></textarea> -->
  </div>
</template>
<style lang="scss" scoped>
.box-chat {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  border-style: solid;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: rgb(241, 236, 236);
  position: relative;

  .name-group {
    min-width: 100%;
    height: 30px;
    margin: 0;
    background-color: white;
    border-bottom: 2px;
    border-color: white;
  }
  .content-box {
    max-height: 400px;
    .box {
      min-height: 400px;
      background-color: white;
      .message {
        // background-color: white;
        overflow: auto;
        overflow-y: scroll;
        height: 400px;
        min-height: 100%;
        max-height: 100%;
        .your-message {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          p {
            background-color: #f1f0f0;
            border-radius: 48px 36px 36px 48px;
            max-width: 80%;
            padding: 6px 10px;
            margin: 1px;
          }
        }
        .my-message {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          p {
            background-color: #09f;
            border-radius: 48px 36px 36px 48px;
            max-width: 80%;
            padding: 6px 10px;
            margin: 1px;
            text-align: right;
          }
        }
      }
    }
  }
  .typing {
    position: absolute;
    height: 65px;
    width: 100px;
    min-width: 100%;
    &__chat {
      // min-width: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 395px;
      max-width: 100%;
      border-style: solid;
      border-color: #f1f0f0;
      :focus {
        border-color: #09f;
      }
    }
  }
}

input {
  width: 300px;
  height: 30px;
  background-origin: padding-box;
  border: 2px solid rgb(102, 73, 156);
  border-width: 2px;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
  &:focus {
    border: 3px solid rgb(171, 163, 187);
  }
}
</style>
<script lang="ts">
import * as SignalR from '@microsoft/signalr'
import { HubConnection } from '@microsoft/signalr'
import Vue from 'vue'
interface IMessage {
  id: number
  userId: string
  username: string
  content: string
  time: number
}
const Connect = new SignalR.HubConnectionBuilder()
  .withUrl('https://localhost:44370/chathub')
  .configureLogging(SignalR.LogLevel.Information)
  .build()
export default Vue.extend({
  data() {
    return {
      username: 'Vuong Vinh Vien',
      boxMessage: '',
      messageOld: [] as Array<IMessage>,
      message: {
        id: 0,
        userId: '',
        username: '',
        content: '',
        time: 0,
      } as IMessage,
      connection: Connect,
    }
  },
  created() {
    this.connection.on(
      'messageReceived',
      (username: string, message: IMessage) => {
        // eslint-disable-next-line no-console
        console.log(username)
        this.messageOld.push(message)
      }
    )
    this.connection.onclose(async () => {
      await this.start(this.connection)
    })
  },
  mounted() {
    this.start(this.connection)
  },
  methods: {
    async start(connection: HubConnection) {
      try {
        await connection.start()
        // eslint-disable-next-line no-console
        console.log('signalR connectioned')
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(`${err} reconnecting...`)
        setTimeout(() => this.start(connection), 3000)
      }
    },
    async onSubmit() {
      this.message.time = new Date().getTime()
      this.message.username = this.username
      await this.connection.send('send', this.username, this.message)
      this.message.content = ''
      this.message.time = 0
    },
  },
})
</script>

import state from "./state.js"
import * as sounds from "./sounds.js"
import * as color from "./colors.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleCounter(){
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.btnpressAudio.play()

  timer.countdown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.btnpressAudio.play()
}

export function addCounter() {
  timer.addMinutes()
  sounds.btnpressAudio.play()
  
}

export function removeCounter() {
  timer.removeMinutes()
  sounds.btnpressAudio.play()
  
}

export function toggleCards(e){
  
  
  if(e === "ph-tree"){
    state.isFlorestMute = document.documentElement.classList.toggle('florest-music-on')

    document.documentElement.classList.remove('rain-music-on', 'coffeeshop-music-on', 'fire-music-on')

    if(state.isFlorestMute){

      sounds.rainingSound.pause()
      color.rainRemoveColor()

      sounds.florestSound.play()
      color.florestAddColor()

      sounds.CoffeStoreSound.pause()
      color.coffeeShopRemoveColor()

      sounds.fireplaceSound.pause()
      color.fireRemoveColor()
      return
    }
    sounds.florestSound.pause()
    color.florestRemoveColor()
  }

  if(e === "ph-cloud-rain"){
    state.isRainMute = document.documentElement.classList.toggle('rain-music-on')

    document.documentElement.classList.remove('florest-music-on', 'fire-music-on', 'coffeeshop-music-on')

    if(state.isRainMute){
      sounds.florestSound.pause()
      color.florestRemoveColor()

      sounds.rainingSound.play()
      color.rainAddColor()

      sounds.CoffeStoreSound.pause()
      color.coffeeShopRemoveColor()

      sounds.fireplaceSound.pause()
      color.fireRemoveColor()
      return
    }

    sounds.rainingSound.pause()
    color.rainRemoveColor()
  }

  if(e === "ph-storefront"){
    state.isCoffeStoreMute = document.documentElement.classList.toggle('coffeeshop-music-on')

    document.documentElement.classList.remove('florest-music-on', 'rain-music-on', 'fire-music-on')

    if(state.isCoffeStoreMute){
      sounds.florestSound.pause()
      color.florestRemoveColor()

      sounds.rainingSound.pause()
      color.rainRemoveColor()

      sounds.CoffeStoreSound.play()
      color.coffeeShopAddColor()

      sounds.fireplaceSound.pause()
      color.fireRemoveColor()
      
      return
    }

    sounds.CoffeStoreSound.pause()
    color.coffeeShopRemoveColor()
  }

  if(e === "ph-fire"){
    state.isfireplaceMute = document.documentElement.classList.toggle('fire-music-on')

    document.documentElement.classList.remove('florest-music-on', 'coffeeshop-music-on', 'rain-music-on')

    if(state.isfireplaceMute){

      sounds.florestSound.pause()
      color.florestRemoveColor()

      sounds.rainingSound.pause()
      color.rainRemoveColor()

      sounds.fireplaceSound.play()
      color.fireAddColor()

      sounds.CoffeStoreSound.pause()
      color.coffeeShopRemoveColor()
      
      return
    }
    sounds.fireAudio.pause()
    color.fireRemoveColor()
  }
}
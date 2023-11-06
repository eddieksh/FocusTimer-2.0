import { controls, sounds } from "./elements.js"
import * as actions from "./actions.js"

export function registerControls(){
  controls.addEventListener('click', (e) => {
    const action = e.target.dataset.action
    if( typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })

  sounds.addEventListener('click', (e) => {
    const action = e.target.dataset.action
    
    if( typeof actions[action] != "function") {
      return
    }
    
    actions[action](e.target.classList[1])
  })
}
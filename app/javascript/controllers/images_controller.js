import { Controller } from "@hotwired/stimulus"
import Paint from "../images/paint.png"

// Connects to data-controller="images"
export default class extends Controller {
  connect() {
    console.log('images controller connected')

    const img = new Image(640, 427)
    img.src = Paint

    this.element.appendChild(img)
  }
}

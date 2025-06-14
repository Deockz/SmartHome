var devices = [
  {
    id: "1",
    name: "Living",
    status: "off",
    type: "light"
  },
  ,
  {
    id: "2",
    name: "Living",
    status: "off",
    type: "sensor"
  }
  ,
  {
    id: "3",
    name: "Living",
    status: "off",
    type: "switch"
  },
  {
    id: "4",
    name: "Kitchen",
    status: "on",
    type: "light"
  }
  ,
  {
    id: "5",
    name: "Kitchen",
    status: "off",
    type: "sensor"
  }
  ,
  {
    id: "6",
    name: "Bedroom",
    status: "off",
    type: "light"
  }
  ,
  {
    id: "7",
    name: "Bedroom",
    status: "off",
    type: "switch"
  }
  ,
  {
    id: "8",
    name: "Dining",
    status: "off",
    type: "light"
  }
  ,
  {
    id: "9",
    name: "Dining",
    status: "off",
    type: "sensor"
  }
  ,
  {
    id: "10",
    name: "Bathroom",
    status: "off",
    type: "light"
  }
 
];

buttonArea = document.getElementById("buttonAreaContainter");
devices.forEach(element => {
    svgType='';
    if (element.type === "switch") {
        svgType = '<svg class="deviceIcon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plug" viewBox="0 0 16 16">                        <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0M5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4z"/>                        </svg>';
        
    }else if (element.type === "light") {
        svgType = ' <svg class="deviceIcon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">       <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>  </svg> ';
    }else if(element.type === "sensor") {
        svgType = '<svg class="deviceIcon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">                        <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049"/>                        <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>                        </svg>';

    }

    buttonArea.innerHTML +=  '<button onclick="changeState(this.value, this.name)" class="deviceButton " name="'+element.name+'" value="'+element.type+'"> <p class="smallText deviceStatus"> '+ element.status+ '</p> '+svgType +'   <p class="deviceName">'+element.name+'</p></button>'; 
 
});


function changeState(value,classNames) {
  if(value === "light") {
    icon = document.querySelector('.' + classNames+'.' + value);
    iconContainer = document.querySelector('#' + classNames);
    icon.classList.toggle("apagado");
    icon.classList.toggle("encendido");
    iconContainer.classList.toggle("habitacionEncendida");
    iconContainer.classList.toggle("habitacionApagada");
    
  }else{
    icon = document.querySelector('.' + classNames+'.' + value);
    icon.classList.toggle("apagado");
    icon.classList.toggle("encendido");
    
  }

}
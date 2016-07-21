function slideUpMenuFunction(element){
  if (element.id == "tips_button"){
    document.getElementById("tips_home").classList.remove("slideDownAnimation")
    document.getElementById("tips_home").classList.add("slideUpAnimation")
  }
  else if (element.id == "settingsMenuSlideUp"){
    document.getElementById("settingsMenu").classList.remove("slideDownAnimation")
    document.getElementById("settingsMenu").classList.add("slideUpAnimation")
  }
  else if (element.id == "uploadsMenuSlideUp"){
    document.getElementById("uploadMenu").classList.remove("slideDownAnimation")
    document.getElementById("uploadMenu").classList.add("slideUpAnimation")
  }
  else if (element = "mapClicked"){
    document.getElementById("uploadMenuAuto").classList.remove("slideDownAnimation")
    document.getElementById("uploadMenuAuto").classList.add("slideUpAnimation")
  }
}
function slideDownMenuFunction(element){
  console.log("slide down pls")
   if (element.id == "tipsMenuSlideDown"){
     document.getElementById("tips_home").classList.remove("slideUpAnimation")
     document.getElementById("tips_home").classList.add("slideDownAnimation")
   }
   else if (element.id == "markerMenuSlideDown"){
     document.getElementById("marker_info").classList.remove("slideUpAnimation")
     document.getElementById("marker_info").classList.add("slideDownAnimation")
   }
   else if (element.id == "settings_icon"){
     document.getElementById("settingsMenu").classList.remove("slideUpAnimation")
     document.getElementById("settingsMenu").classList.add("slideDownAnimation")
   }
   else if (element.id == "upload_icon"){
     document.getElementById("uploadMenu").classList.remove("slideUpAnimation")
     document.getElementById("uploadMenu").classList.add("slideDownAnimation")
   }
   else if (element = "mapClicked"){
     console.log("GO DOWN FOUL BEAST!")
     document.getElementById("uploadMenuAuto").classList.remove("slideUpAnimation")
     document.getElementById("uploadMenuAuto").classList.add("slideDownAnimation")
   }
}

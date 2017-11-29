window.addEventListener("deviceorientation", function (evt){
                                                if (evt.alpha < 5 || evt.alpha > 355) {
                                                  windows.alert("North!");
                                                } else if (evt.alpha < 180) {
                                                  windows.alert("Turn Left");
                                                } else {
                                                  windows.alert("Turn Right");
                                                }
                                            }
);

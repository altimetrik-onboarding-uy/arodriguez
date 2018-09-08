({
	read: function (component, newItem) {
        // Create the action
        var action = component.get("c.getItems");
		action.setParams({
			"typeTask": 'Habit',
			"status": ''
		});	
        // Add callback behavior for when response is received
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.tasks", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);
    },

    updatedStatus: function(component,event,status){
        // Update
        var id = event.getSource().get("v.value");
        var action = component.get("c.updateHabit");
        action.setParams({
            "id": id,
            "status": status,
            "habit": true
        });	
        // Add callback behavior for when response is received
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
       
        // Send action off to be executed
        $A.enqueueAction(action);
           }


})
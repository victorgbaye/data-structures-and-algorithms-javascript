//Creating a list class
/*
List data structure operations


*Adding an element to a list
*Checking list length
*Finding an element in a list
*Removing an element from a list
*Clearing a list

*/
function listClass(){

    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;

    //adding an element to a list
    this.add = function(element){
            return this.dataStore[i++] == element;
    }

    //get List Length
    this.listLength = function(){
        return this.dataStore.length
    }

    //Finding an element in a list
    this.findListElement = function(element){
        for (let i = 0; i < this.dataStore.length; i++) {
           if (this.dataStore[i] == element) {
            return i
           }
        }
        return -1
    }

    //Remove an element from a list
    this.removeListElement = function(element){
        var foundAt = this.findListElement(element)
        if(foundAt > -1){
            this.dataStore.splice(foundAt,1)
            -- this.listSize
            return true
        }
        return false
    }

    //clear a list
    this.clearList = function(){
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = position = 0;
        
    }
}
    /**
     *  @author Alexey Kulikov <clops>
     **/
     
    function getSelectedText() {
        var sel = window.getSelection()+'';
        sel.replace(/^\s+|\s+$/g,""); //trim
        return sel;
    }

    safari.self.addEventListener("message", function(msg){
        var sel = getSelectedText();
        
        //push the selection to the global scope
        safari.self.tab.setContextMenuEventUserInfo(sel);
        
        switch(msg.name){
            case 'getSelectedTextForP4TTicket': {
                safari.self.tab.dispatchMessage('theSelectionForP4TTicket', sel);
                break;
            }
        
            case 'getSelectedTextForAgileZENCard': {
                safari.self.tab.dispatchMessage('theSelectionForAgileZenCard', sel);
                break;  
            }            
        }
    }, false);
    
    document.addEventListener("contextmenu", function(msg){
        safari.self.tab.setContextMenuEventUserInfo(msg, getSelectedText());
    }, false);

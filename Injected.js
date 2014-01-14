    /**
     *  @author Alexey Kulikov <clops>
     **/
     
    function handleMessage(msg) {
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
    }
    
    function handleSelectedText(msg) {
        var sel = getSelectedText();
        safari.self.tab.setContextMenuEventUserInfo(msg, sel);
    }
    
    function getSelectedText() {
        var sel = window.getSelection()+'';
        sel.replace(/^\s+|\s+$/g,""); //trim
        return sel;
    }

    safari.self.addEventListener("message", handleMessage, false);
    document.addEventListener("contextmenu", handleSelectedText, false);

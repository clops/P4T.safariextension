function handleMessage(msg) {
    var sel = window.getSelection()+'';
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

if (window.top === window) {
    safari.self.addEventListener("message", handleMessage, false);
}


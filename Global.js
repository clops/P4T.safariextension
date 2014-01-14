safari.application.addEventListener('command', performCommand, false);
safari.application.addEventListener('message', handleMessage, false);

function performCommand(event) {
    if (event.command === 'contextmenutranslate') {
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('getselection');
    }
}

function handleMessage(msg) {
    if (msg.name === 'theselection') {
        alert(msg.message);
    }
}
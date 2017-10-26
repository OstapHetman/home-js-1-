$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

var clipboard = new Clipboard('#clipboard');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    setTooltip(e.trigger, 'Copied!');
    hideTooltip(e.trigger);
    e.clearSelection();
});

function setTooltip(btn, message) {
    $(btn)
        .attr('data-original-title', message)
        .tooltip('show');
}

function hideTooltip(btn) {
    setTimeout(function() {
        $(btn).tooltip('hide')
            .attr('data-original-title', "");
    }, 1000);
}
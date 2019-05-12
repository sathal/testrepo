function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1Ice4tlzts_JPM6JOaCzuMDErw2RyqAk8ruH8w6_HWHM/pubhtml',
 callback: function(data, tabletop) {
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)

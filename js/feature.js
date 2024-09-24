
// showing three card main part
document.getElementById('donation-first-btn').addEventListener('click', function(){
   
    getSectionByDivId('three-card-div')
     // add and remove bg-color
     document.getElementById('history-first-btn').classList.remove('bg-green-400','text-white');
     document.getElementById('donation-first-btn').classList.add('bg-green-400','text-white');
});

// showing history div
document.getElementById('history-first-btn').addEventListener('click', function(){
   
    getSectionByDivId('history-div');
    // add and remove bg-color
    document.getElementById('history-first-btn').classList.add('bg-green-400','text-white');
    document.getElementById('donation-first-btn').classList.remove('bg-green-400','text-white');
});

// close confirmation btn
document.getElementById('close-confirmation-btn')
.addEventListener('click', function(){
    document.getElementById('success-div').classList.add('hidden')
})
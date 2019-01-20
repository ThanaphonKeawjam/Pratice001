function setData(){
    firebase.database().ref('profile').set({
        name: 'Tong',
        age: '20',
        faculty: 'Engineering',
        devices: {
            iphone: 'true',
            macbook: 'true'
        }
    });
}

function updateData(){
    firebase.database().ref('profile').update({
        name: 'PerfecT'
    });
}

function pushData(){
    // firebase.database().ref('profile/devices').push('samsung');
    firebase.database().ref('messages').push('ไอบ้า');
}

function deleteData(){
    firebase.database().ref('profile').remove();
}

firebase.database().ref().on('value', function(snapshot){
    var data = snapshot.val();
    document.getElementById('realtime-data').innerText = JSON.stringify(data, null, 2);
});
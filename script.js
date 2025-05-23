document.addEventListener('DOMContentLoaded',()=>{

   const participantInput = document.getElementById('participantInput');
   const addParticipantButton = document.getElementById('addParticipantButton');
   const participantList = document.getElementById('participantList');
   const drawButton = document.getElementById('drawButton');
   const winnerDisplay = document.getElementById('winner');
   const participants = JSON.parse(localStorage.getItem('participants')) || [];

    // Kullanıcıları local'a kaydetme
    const saveParticipants=()=>{
        localStorage.setItem('participants',JSON.stringify(participants));
    }

    // Katılımcıları ekranda listeleme
    const renderParticipants=()=>{
        participantList.innerHTML='';
        participants.forEach((participant,index)=>{
            const li = document.createElement('li');
            li.className='participant-item';
            li.innerHTML=`<span> ${participant} </span>
            <button class="delete-button">Sil</button>`;

            li.querySelector('.delete-button').addEventListener('click',()=>{
                participants.splice(index,1);
                saveParticipants();
                renderParticipants();
            });
            participantList.appendChild(li);
        });

    
    }
   





             // Ekle butonuna tetiklenince calıscak olan kod
            addParticipantButton.addEventListener('click',()=>{
            const participantName = participantInput.value.trim();
            if(participantName !== ''){
                participants.push(participantName);
                participantInput.value='';
                saveParticipants();
                renderParticipants();
            }

        });








        // Çekiliş butonu tetıklenınce calıscak olan kod

        drawButton.addEventListener('click',()=>{
            if(participants.length===0){
                winnerDisplay.textContent='Katılımcı Yok !';
                return;
            }
            const randomIndex = Math.floor(Math.random() * participants.length);
            const winner = participants[randomIndex];
            winnerDisplay.textContent= ` Kazanan : ${winner} `
        })

        renderParticipants();





})
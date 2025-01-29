
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Happy 3rd Month Anniversary baby.').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "Three months down, forever to go. Each day with you feels like a new chapter in a beautiful story I never want to end. Here’s to the start of something timeless, a bond that only grows stronger with every heartbeat. Happy 3rd month, my love—you are my greatest blessing and my forever";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

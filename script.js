
const filmModal = document.getElementById("filmModal");
const modalTitle = document.getElementById("modalTitle");
const modalPoster = document.getElementById("modalPoster");
const modalMeta = document.getElementById("modalMeta");
const modalSynopsis = document.getElementById("modalSynopsis");
const closeModal = document.getElementById("closeModal");
const backToCatalog = document.getElementById("backToCatalog");

// Sinopsis untuk film-film di katalog CineWave
const filmDetails = {
    "elio": {
        genre: "Animasi • Petualangan • Fiksi Ilmiah",
        synopsis: "Elio adalah seorang anak yang memiliki imajinasi besar dan merasa sulit menemukan tempatnya di dunia. Petualangan tak terduga membawanya berhubungan dengan makhluk dari luar angkasa dan menghadapi pengalaman yang mengubah hidupnya."
    },
    "insidious": {
        genre: "Horor • Misteri • Supranatural",
        synopsis: "Sebuah keluarga menghadapi kejadian misterius setelah anak mereka mengalami kondisi yang tidak biasa. Serangkaian peristiwa menyeramkan membawa mereka pada rahasia dunia supranatural."
    },
    "the conjuring": {
        genre: "Horor • Misteri • Supranatural",
        synopsis: "Sepasang penyelidik fenomena paranormal membantu sebuah keluarga yang mengalami gangguan mengerikan di rumah mereka. Mereka berusaha mengungkap sumber teror yang mengancam keluarga tersebut."
    },
    "twilight": {
        genre: "Romansa • Fantasi • Drama",
        synopsis: "Bella Swan pindah ke sebuah kota kecil dan bertemu Edward Cullen, seorang pemuda misterius yang menyimpan rahasia besar. Hubungan mereka berkembang menjadi kisah cinta yang penuh tantangan."
    },
    "twilight saga: new moon": {
        genre: "Romansa • Fantasi • Drama",
        synopsis: "Setelah peristiwa yang menyakitkan, Bella berusaha menjalani hidup tanpa Edward. Kedekatannya dengan Jacob membawanya pada rahasia baru tentang dunia makhluk supernatural."
    },
    "eclipse": {
        genre: "Romansa • Fantasi • Drama",
        synopsis: "Bella berada di tengah ancaman baru yang membahayakan dirinya. Ia harus menghadapi pilihan sulit tentang cinta, persahabatan, dan masa depannya."
    },
    "breaking dawn part 1": {
        genre: "Romansa • Fantasi • Drama",
        synopsis: "Bella dan Edward memulai kehidupan baru bersama. Namun, kebahagiaan mereka menghadapi ujian besar ketika sebuah kehamilan yang tidak biasa menimbulkan risiko berbahaya."
    },
    "breaking dawn part 2": {
        genre: "Romansa • Fantasi • Drama",
        synopsis: "Setelah perubahan besar dalam hidup Bella, keluarga Cullen harus melindungi orang-orang yang mereka cintai dari ancaman yang dapat mengubah masa depan mereka."
    },
    "the k2": {
        genre: "Aksi • Thriller • Drama",
        synopsis: "Seorang mantan tentara yang terampil bekerja sebagai pengawal dan terlibat dalam konflik berbahaya yang berkaitan dengan kekuasaan, politik, dan rahasia keluarga."
    },
    "goblin": {
        genre: "Fantasi • Romansa • Drama",
        synopsis: "Seorang makhluk abadi mencari cara untuk mengakhiri kehidupannya yang panjang. Pertemuannya dengan seorang perempuan yang memiliki peran khusus dalam takdirnya mengubah perjalanan hidup mereka."
    },
    "boy over flowers": {
        genre: "Romansa • Komedi • Drama",
        synopsis: "Seorang siswi biasa memasuki sekolah elite dan berhadapan dengan kelompok siswa populer yang memiliki pengaruh besar. Konflik, persahabatan, dan kisah cinta pun mulai berkembang."
    },
    "a hundred memories": {
        genre: "Drama • Romansa",
        synopsis: "Kisah persahabatan dan kehidupan dua perempuan yang menghadapi berbagai pengalaman, impian, dan hubungan yang membentuk perjalanan mereka."
    },
    "the conjuring 2": {
        genre: "Horor • Misteri • Supranatural",
        synopsis: "Pasangan penyelidik paranormal menangani sebuah kasus keluarga yang mengalami kejadian menyeramkan di rumah mereka. Penyelidikan tersebut membawa mereka menghadapi kekuatan yang sulit dijelaskan."
    },
    "insidious chapter 2": {
        genre: "Horor • Misteri • Supranatural",
        synopsis: "Keluarga Lambert berusaha memahami kejadian mengerikan yang terus menghantui mereka. Masa lalu dan rahasia yang belum terungkap menjadi bagian penting dari misteri tersebut."
    },
    "insidious chapter 3": {
        genre: "Horor • Misteri • Supranatural",
        synopsis: "Seorang remaja mengalami gangguan misterius dan meminta bantuan seorang paranormal. Upaya untuk menghubungi dunia lain justru membawa mereka menghadapi bahaya yang tak terduga."
    },
    "insidious the red door": {
        genre: "Horor • Misteri • Supranatural",
        synopsis: "Bertahun-tahun setelah pengalaman mengerikan mereka, keluarga Lambert kembali menghadapi masa lalu yang belum benar-benar hilang. Rahasia lama mulai muncul kembali."
    },
    "insidious out of the further": {
        genre: "Horor • Misteri • Supranatural",
        synopsis: "Cerita dari dunia Insidious ini membawa penonton kembali ke misteri The Further, sebuah dunia menyeramkan yang terhubung dengan kejadian supernatural."
    },
    "mario": {
        genre: "Animasi • Komedi • Petualangan",
        synopsis: "Mario memulai petualangan di dunia yang penuh tantangan setelah terpisah dari saudaranya. Ia bertemu teman-teman baru dan berusaha menghadapi ancaman yang membahayakan kerajaan."
    },
    "minions": {
        genre: "Animasi • Komedi • Petualangan",
        synopsis: "Sekelompok Minion yang lucu memulai petualangan untuk mencari pemimpin yang cocok. Perjalanan mereka dipenuhi kekacauan, persahabatan, dan kejadian kocak."
    },
    "despicable me": {
        genre: "Animasi • Komedi • Keluarga",
        synopsis: "Seorang penjahat yang terkenal merencanakan aksi besar, tetapi kehidupannya berubah ketika ia bertemu tiga anak perempuan. Hubungan mereka membuatnya melihat arti keluarga dengan cara baru."
    },
    "frozen":{
        genre: "Animasi, Fantasi, Petualangan, Musikal",
        synopsis: "Elsa, seorang putri dengan kekuatan mengendalikan es dan salju, tanpa sengaja membuat kerajaannya membeku. Adiknya, Anna, memulai perjalanan bersama Kristoff, Sven, dan Olaf untuk menemukan Elsa serta menyelamatkan kerajaan mereka."
    },
    "up": {
        genre: "Animasi, Petualangan, Komedi, Drama",
        synopsis: "Carl Fredricksen, seorang pria lanjut usia, mewujudkan impian mendiang istrinya dengan menerbangkan rumahnya menggunakan ribuan balon menuju Paradise Falls. Dalam perjalanan, ia ditemani seorang anak pramuka bernama Russell dan menghadapi petualangan yang tak terduga."
    },
    "evil dead burn": {
        genre: "Horor, Supernatural",
        synopsis: "Sebagai bagian dari waralaba Evil Dead, film ini menghadirkan teror supernatural ketika kekuatan jahat mengancam para tokohnya. Mereka harus berjuang menghadapi kejadian mengerikan dan ancaman yang semakin mematikan."
    },
    "marry my husband": {
        genre: "Drama, Romantis, Fantasi, Balas Dendam",
        synopsis: "Kang Ji-won dikhianati oleh suami dan sahabatnya, lalu meninggal dunia. Secara misterius, ia kembali ke masa sepuluh tahun sebelumnya dengan ingatan masa lalu. Ia pun menyusun rencana untuk membalas dendam dan mengubah nasibnya, dibantu oleh Yu Ji-hyuk."
    },
    "boys over flowers": {
        genre: "Romantis, Drama, Komedi, Sekolah, Remaja",
        synopsis: "Geum Jan-di, seorang gadis sederhana, mendapat kesempatan bersekolah di sekolah elit yang dipenuhi anak-anak orang kaya. Di sana, ia bertemu F4, kelompok empat siswa populer yang dipimpin Gu Jun-pyo. Pertemuan mereka memicu konflik, persahabatan, dan kisah cinta yang penuh lika-liku."
    },
    "18 Again": {
        genre: "Romantis, Drama, Misteri",
        synopsis: "Hong Dae-young, seorang pria berusia 37 tahun yang menghadapi masalah rumah tangga, tiba-tiba kembali ke tubuhnya saat berusia 18 tahun. Dengan identitas baru sebagai siswa SMA bernama Go Woo-young, ia mencoba memperbaiki hubungannya dengan keluarga dan memahami arti menjadi seorang ayah."
    },
    "pinocchio": {
        genre: "Romantis, Komedi, Drama, Fantasi",
        synopsis: "Choi Dal-po, seorang pemuda yang menyimpan masa lalu kelam, bercita-cita menjadi reporter untuk mengungkap kebenaran. Ia bertemu Choi In-ha, seorang perempuan yang memiliki sindrom Pinocchio, yaitu selalu mengalami cegukan ketika berbohong. Bersama-sama, mereka menghadapi tantangan dunia jurnalistik dan mengungkap berbagai rahasia."
    },
    "blood": {
        genre: "Fantasi, Romantis, Medis, Aksi",
        synopsis: "Park Ji-sang adalah seorang dokter bedah berbakat yang juga merupakan vampir. Ia bekerja di sebuah rumah sakit untuk menyelamatkan nyawa manusia sambil mencari cara mengatasi kondisi vampir yang dimilikinya. Dalam perjalanannya, ia menghadapi konflik berbahaya dan menemukan cinta di tengah perjuangannya."
    }

};

// Menyamakan variasi penulisan judul agar mudah dicocokkan
function normalizeTitle(title) {
    return title
        .toLowerCase()
        .replace(/\([^)]*\)/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function findFilmDetails(title) {
    const normalized = normalizeTitle(title);

    // Cari kecocokan langsung
    for (const [key, detail] of Object.entries(filmDetails)) {
        if (normalizeTitle(key) === normalized) {
            return detail;
        }
    }

    // Tangani judul yang memiliki tambahan tahun atau keterangan
    if (normalized.includes("twilight saga new moon")) {
        return filmDetails["twilight saga: new moon"];
    }

    if (normalized.includes("breaking dawn part 1")) {
        return filmDetails["breaking dawn part 1"];
    }

    if (normalized.includes("breaking dawn part 2")) {
        return filmDetails["breaking dawn part 2"];
    }

    if (normalized.includes("the conjuring 2")) {
        return filmDetails["the conjuring 2"];
    }

    if (normalized.includes("insidious chapter 2")) {
        return filmDetails["insidious chapter 2"];
    }

    if (normalized.includes("insidious chapter 3")) {
        return filmDetails["insidious chapter 3"];
    }

    if (normalized.includes("insidious the red door")) {
        return filmDetails["insidious the red door"];
    }

    if (normalized.includes("insidious out of the further")) {
        return filmDetails["insidious out of the further"];
    }

    if (normalized.includes("despicable me")) {
        return filmDetails["despicable me"];
    }

    if (normalized.includes("minions")) {
        return filmDetails["minions"];
    }

    if (normalized.includes("mario")) {
        return filmDetails["mario"];
    }

    if (normalized.includes("the conjuring")) {
        return filmDetails["the conjuring"];
    }

    if (normalized.includes("insidious")) {
        return filmDetails["insidious"];
    }

    if (normalized.includes("twilight")) {
        return filmDetails["twilight"];
    }

    // Deskripsi cadangan untuk judul yang belum terdaftar
    return {
        genre: "Film • Detail",
        synopsis: "Tambahkan sinopsis khusus untuk film ini pada bagian filmDetails di file script.js agar informasi yang ditampilkan lebih lengkap dan akurat."
    };
}

function openFilmDetail(card) {
    const titleElement = card.querySelector("h2, h3, h4, .movie-title");
    const poster = card.querySelector("img");

    if (!titleElement || !poster) {
        console.warn("Kartu film harus memiliki judul dan gambar poster.", card);
        return;
    }

    const title = titleElement.textContent.trim();
    const detail = findFilmDetails(title);

    modalTitle.textContent = title;
    modalPoster.src = poster.currentSrc || poster.src;
    modalPoster.alt = "Poster film " + title;
    modalSynopsis.textContent = detail.synopsis;

    modalMeta.replaceChildren();

    [detail.genre].forEach((info) => {
        const badge = document.createElement("span");
        badge.textContent = info;
        modalMeta.appendChild(badge);
    });

    filmModal.classList.add("show");
    filmModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeModal.focus();
}

function hideFilmDetail() {
    filmModal.classList.remove("show");
    filmModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// Pasang aksi klik pada kartu film
document.querySelectorAll(".movie-card").forEach((card) => {
    card.style.cursor = "pointer";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Lihat detail film");

    card.addEventListener("click", (event) => {
        // Cegah link lama di kartu berpindah halaman
        if (event.target.closest("a")) {
            event.preventDefault();
        }

        openFilmDetail(card);
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openFilmDetail(card);
        }
    });
});

// Tombol tutup dan kembali ke katalog
closeModal.addEventListener("click", hideFilmDetail);
backToCatalog.addEventListener("click", hideFilmDetail);

// Tutup saat area gelap di luar kotak diklik
filmModal.addEventListener("click", (event) => {
    if (event.target === filmModal) {
        hideFilmDetail();
    }
});

// Tutup menggunakan tombol Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && filmModal.classList.contains("show")) {
        hideFilmDetail();
    }
});

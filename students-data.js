// ============================================================
// STUDENT DATA — this is the only file you need to edit.
// ============================================================
// Add one entry per student below, following the same pattern.
// - "name" is what the student will type in on the site.
//   Matching ignores case and extra spaces, so "juan dela cruz"
//   and "Juan Dela Cruz" both work — but the spelling must match.
// - "progress" is a short line summarizing where they landed
//   this term (grade, band, or a one-line summary — your call).
// - "message" is the personal note from you. Line breaks you
//   type here (press Enter) will show as paragraph breaks on
//   the page.
//
// Copy one block, paste it before the closing "];", fill it in,
// and add a comma after the previous entry's closing "}".
// ============================================================

const STUDENTS = [
  {
    name: "Ava Thompson",
    progress: "Grade: A− · Strongest in Algebra & Geometry",
    message: `You came into this term still hesitant about speaking up in class, and by the end you were the one walking classmates through problems on the board. That shift didn't happen by accident — it came from you showing up prepared, week after week.

Keep pushing on word problems next term; that's the one place your quick thinking sometimes outruns your explanation. Everything else is in great shape.

— Mr. Santos`
  },
  {
    name: "Marcus Lee",
    progress: "Grade: B+ · Most improved in Written Composition",
    message: `Your essays at the start of term and your essays now barely look like they were written by the same student. The structure, the transitions, the way you back up an argument with evidence — all of it grew a lot this term, and it shows you were actually applying the feedback, not just reading it.

For next term, work on trusting your first instinct in class discussions — you often have the right read on a text before you second-guess yourself.

— Ms. Reyes`
  },
  {
    name: "Friska",
    progress: "Grade: A+ · Konsisten Berak",
    message: `Selamat! Anda dinobatkan sebagai Duta Berak Nasional!

Teruslah Berak, Jangan Menyerah!💪🏻💩

— Prabowo ❤️ Teddy`
  },
  {
    name: "Priya Nair",
    progress: "Grade: A · Consistent across all subjects",
    message: `Steady is the word I'd use for your term — steady effort, steady curiosity, steady support for the classmates sitting near you. Teachers notice that kind of consistency even when it doesn't come with fireworks.

I'd love to see you take a bit more risk next term — raise your hand with the half-formed idea, not just the fully-worked-out one. You're ready for that.

— Mr. Santos`
  },
  {
    name: "Fifah",
    progress: "85.38 - LULUS🥳 · \"Cikgu Kita🤫\"",
    message: `Mentor Words:
    
"Selamat ya, cikgu dah lulus!🥳 Jangan lupa untuk perkaya kosakatanya dan banyak-banyak latihan ngomong atau ngobrol sama teman yang juga belajar bahasa mandarin atau yang sudah lebih ahli, jadi lebih terlatih lagi untuk *speaking*nya."

"Selamat yaa, akhirnya lulus. Pasti dah bosan kan dengar kami ngurangin nilai mulu wkwk, *but* itu buat latih kalian agar lebih konsisten lagi. Perbanyak kosakata dan semangat terus belajarnya."

Co-Mentor Words:

"Cikkguuu!!! Selamat yaa ahayyy lulus juga akhirnyoooo!!!

Ga adaa catatan soal absen... Tapi tolong untuk lebih aktif lagii yaa cikguuu!"

— SJTU Team`
  },
  {
  name: "Aisah",
  progress: "92.50 - LULUS🥳 · \"Diam, Diam, Memang Diam😬\"",
  message: `Mentor Words:

"Jujur saja, seharusnya kamu bisa dapat nilai lebih... Namun, kamu banyak *skip* tugas. Hfftt sedihnyoo. *Next*, lebih teliti lagi, yaa.✍🏻"

"Hmm, *congratss* ya. Lebih aktif lagi di kelas selanjutnya."

Co-Mentor Words:

"Aku jarang berinteraksi sama Aisah niii.... Untuk absen dan yang lain aman sii tapi tolong untuk ke depannya lebih aktif dan sering-sering *raise hand* yaa, Aisah..... Selain ituu sudah bagusss...."

— SJTU Team`
},
{
  name: "Linda",
  progress: "84.87 - LULUS🥳 · \"OTW jadi Pegawai Kopdes, ya? (Siap! Siap! Every time)😮😮\"",
  message: `Mentor Words:

"Wowiw, ketua kelas yang siap! Siap! mulu nih wkwkw
Terima kasih sudah banyak membantu tugas co-mentor, ya! Hmm... catatannya apa ya Linda ini. Mungkin perbanyak latihan nada aja ya. Banyak-banyak latihan kayak menulis dan membaca ya, Linda..."

"Yuhuu, lulus akhirnya. Beban setengah dah hilang sepertinya wkwk, KM satu ini beda emang ingatkan yang lain tugas, tapi dirinya sendiri lupa hahah😂. Semangat terus belajar dan perbanyak kosakatanya, *next* dah bisa lancar nihh."

Co-Mentor Words:

"Iihiiyyy akhirnya gimana? Seneng, ga, lulus, Bu Ketu? Terima kasih yaa sudah banyak membantu tugas kami sebagai *co-mentor*..... Hmmm apa lagi yaaa.... Oohhh!! Jangan lupa daftar jadi pegawai kopdes yaaa soalnya udah cocok ituu setiap dikasih instruksi siap, *laoshi*! Baik, *laoshi*! Hehehe bercandaa yaaa.... Pokoknya, terima kasih banyak atas semua dedikasi yang sudah kamu berikan."

— SJTU Team`
},
{
  name: "Dania",
  progress: "80.75 - LULUS🥳 · \"Duta Nyimak😳😳\"",
  message: `Mentor Words:

"Catatan untuk Dania, lebih banyak aktif di kelas lagi, ya. Kadang emang banyak hal yang di luar kendali kita, misal jam pulang yang bertabrakan dengan jam kelas. Namun, karena sudah memutuskan untuk mengikuti kelas, maka sebaiknya lebih diperhatikan lagi. Kemudian, tolong lebih teliti lagi, ya... Tugas, dll. Perbanyak kosakata, banyak-banyak latihan membaca, terutama dalam pelafalan (masih kurang! Terutama pada *zi, ci, si, shi, chi, zhi*) dan tentunya, nada. Kalau bisa sih, meskipun nilai kamu *eligible* untuk lanjut, saya menyarankan kamu untuk mengulang kelas karena pelafalan masih kurang. Semangat!"

"*For Dania, first, congratss* ya. Keluarkan semangat kamu yang membara itu, ketika kelas berlangsung. Pelafalan dilatih lagi dan perbanyak kosakata tentunya, susah ya di kelas kami? Iya jika dipikir, *but* itu buat push kalian lebih aktif lagi, tugas seumbrak wkwk, gak nyangka juga sih. Jika kamu akhirnya memutuskan buat lanjut HSK 2, konsisten ya sampai akhir dan semangatt yoo."

Co-Mentor Words:

"Dania... Hmmm apaa yaa.... Ooh iyaa, pesan untuk Dania mohon lebih perhatikan lagi pengumuman dan *rules* yang sudah dijelaskan..... Bertanya itu tidak apa dan tidak dipermasalahkan, tetapi jika sudah dijelaskan kembali dan kamu tidak melakukan sesuai instruksi itu juga akan berdampak ke nilai kamu sendiri. Oke, yaa?? Semangat!!!"

— SJTU Team`
},
{
  name: "Ella",
  progress: "77.03 - TIDAK LULUS😢 · \"Galak banget, nih? 😤😠\"",
  message: `Mentor Words:

"*First of all*, semangat dan semoga betah dengan kerjaan barunya! Itu kerjaannya keren banget sih. Catatan saya untuk Ella di *batch* ini, sebenarnya *knowledge-wise* kamu sudah bagus, namun (mungkin karena kesibukan juga) kamu sempat beberapa kali *miss* tugas ya... sayang sekali☹️. Tapi gapapa, ini artinya kesempatan untuk latihan lebih banyak dan memperdalam pemahaman materi. Tetap semangat dan jangan ragu untuk keluar dari zona nyaman ya, Ella!"

"Yahh, tetap semangat, Ella! Gak lulus bukan berarti gagal, tapi diberi waktu untuk memperdalam dan belajar lebih banyak lagi. Karena kesibukan kamu waktu awal kelas, jadi banyak tugas yang kelewat. Semangat terus dan lancar kerjaannya."

Co-Mentor Words:

"Oohoooo Bu Sekreeee.... Terima kasih banyak atas dedikasi yang sudah kamu berikan... Terima kasih banyak sudah banyak membantu tugas *co-mentor*. Kalo isi absen jangan lupa di*screenshot-screenshot* yaa siapa tau ga masuk di rekapan Wkwkkwk. Tetap semangat teruss untuk belajar yaaa, Bu Sekre...."

— SJTU Team`
},
{
  name: "Fan",
  progress: "36.77 - TIDAK LULUS😢 · \"Aslinya emang unik, sih... 🤔🤔\"",
  message: `Mentor Words:

"*Well, well, well.* Fan *同学*.... Saya rasa kamu sendiri juga sudah bisa menilai sendiri, ya apa yang masih perlu untuk ditingkatkan dalam Bahasa Mandarin kamu... Kalau belum, coba dicek-cek lagi yaaa catatan yang sudah saya dan Nurul laoshi berikan. Pelafalan memang sulit, apalagi kalau kamu jarang latihan. Dan setelah pelafalan, masih ada nada/*shengdiao* yang harus kamu latih juga. Jadi, kalau kamu memang serius ingin bisa berbahasa Mandarin, maka kamu juga mau gak mau harus berusaha lebih ekstra untuk mencapai apa yang kamu mau. Dan juga, ketika kamu butuh bantuan orang dan diberikan masukan, tolong lebih diperhatikan lagi, ya cara komunikasinya. Semangat!"

"Fan fan, dah ekspek juga kalau gak lanjut ke *next class. But* bukan berarti dah *judge* dari awal, tapi kamu masih banyak bagian yang kurang, mulai dari pelafalan (utama) dan nada. Tugas terakhir video cukup ada kemajuan tidak separah sebelumnya, tapi masih kurang. Catatan yang diberikan selama *batch* ini diperhatikan dan dilatih terus bagian yang kurang itu. *I know* kamu suka belajar bahasa, banyak juga ikut kelas bahasa lain. *So* konsisten pada hal yang kamu sukai dan serius. Tetap semangat, terus belajar, dan selesaikan HSK 1 ini.💪🏻"

Co-Mentor Words:

"Untuk Fan mohon diperhatikan lagi *rules* dan catatan-catatan yang telah diberikan oleh *mentor*. Semua orang juga punya kesibukan..... Jadi, kami harap apa yang sudah kamu mulaii sekarang kamu bisa lebih berusaha lagi untuk terus maju dan lebih aktif lagi, jika diberi catatan ituuu artinya bukannn untuk menyusahkan tetapi melatih apa yang memang dirasa kurang. Jadi, kamu harus berusaha untuk mengerjakannya. Jangan takut, jangan minder untuk bertanya."

— SJTU Team`
},
{
  name: "Hana",
  progress: "96.40 - LULUS🥳 · \"Semangat, semangat, semangat, semangat. DHUAARR!🔥🔥🔥\"",
  message: `Mentor Words:

"Gak banyak, sih untuk Hana. Dipertahankan performanya dan jangan lupa untuk tetap teliti!! Semangat!"

"Wahh, selamatt Hana. Semangat yang sangat baik, konsisten sekalii. Tetap pertahankan dan tingkatkan lagi, *wishlist* bisa berbahasa Mandarin dengan lancar tercapai.🥳"

Co-Mentor Words:

"Untukk Hana ga ada sii yaa sepertinya... Soalnya kita juga jarang interaksi wkkwkwk.... Mungkin dipertahankan atau mungkin lebih, lebih semangat lagi untuk ke depannya yaaa! Udah bagus kok, tapi kalo bisa lebih, kenapa engga??? Iyaa kan.... Semangat teruss yaa."

— SJTU Team`
},
{
  name: "Kiswuri",
  progress: "98.99 - LULUS🥳 · \"Duta Nawar🏆🥇🎖️\"",
  message: `Mentor Words:

"Duh malasnyo.
Wks
Tetap menyerah dan jangan semangat. Wkwkwk
Ga deng. Lebih teliti aja sih buat Kiswuri, ya."

"Apa yaa, Rank 1 banget nihh tebakan kamu salah wkwk. *Congratss* dan semangat terus pepet *shuaige* itu ahahh, ceria sekalii kamu."

Co-Mentor Words:

"*Skipp Skipp* ini *skip* ajaa wkwkkw. Ga ada catatan sii untuk Kiswuri *all gooddddd*, cuma mungkin jangan keseringan nawar aja sii biar ga diminusin wkwkwkkwk. Ubur-ubur ikan lele, stress leee"

— SJTU Team`
},
{
  name: "Machiko",
  progress: "76.72 - TIDAK LULUS😢 · \"*Multitasking* banget!🙀🙀\"",
  message: `Mentor Words:

"Chikooo banyak-banyak latihan membaca, ya! Pelafalan masih belum memenuhi syarat dan nada juga masih belum konsisten. Masih suka berubah-ubah meskipun masih membaca 1 kalimat yang sama. Sekali lagi, perbanyak latihan membaca dan juga jangan lupa perkaya kosakata!"

"Tetap semangat dan banyak latihan lagi, Machikoo. Terutama pelafalan dan nada masih kurang, belum konsisten. Walau gak lulus berarti diberi waktu buat terus belajar lagi, jadi semangat terus dan tetap jaga kesehatan."

Co-Mentor Words:

"Machikooooo kalo sakitt izin aja gapapa ga usah maksaaa ikuttt kelasss... Aku yang takutt jadinya... wkwkwkk. Ga ada sii sebenernya catatan untuk Machiko. Pertahankan semangat yang membara ituuu."

— SJTU Team`
},
{
  name: "Marni",
  progress: "69.54 - TIDAK LULUS😢 · \"Ayo lebih berani lagi!💪🏻💪🏻\"",
  message: `Mentor Words:

"Untuk Marni, perkaya kosakata dan perbanyak latihan membaca serta membuat kalimat! Semangat!"

"Marnii, sejauh ini *progress* kamu sudah baik. Tapi terkait pelafalan, nada, kosakata masih perlu dilatih lagi. Juga pemahaman terkait materi diperdalam. Aku gak banyak kata-kata, kamu dah berusaha dan bertahan sampai sejauh ini itu bagus banget, tidak menyerah. Jadi, kesempatan berikutnya akan hasilkan yang lebih baik lagi. Semangat terus buat Marni~"

Co-Mentor Words:

"Apaa yaa catatannya..... Oohh! Tolong  kalo mau izin jangan sukaa dadakannnn hehehee takut ga kebaca pesannya kalo dadakannn...  Ooh iya, dan juga izinnya tolong untuk ke depannya dikurangi, absen kamu banyak kuning-kuningnyaaa.... Selain itu catatannya, ga ada lagii ga ada masalah."

— SJTU Team`
},
{
  name: "Melisa",
  progress: "48.35 - TIDAK LULUS😢 · \"Aku siap mendengar curhatanmu~😉😉\"",
  message: `Mentor Words:

"Sayang sekali Melisa gak bisa ikut ujian, ya. Di kesempatan selanjutnya, tolong lebih teliti dan jangan ragu untuk mencari tahu apa yang kamu lewatkan. Semangat!"

"Yahh, sisa satu langkah lagi untuk bisa mengikuti ujian, tapi sayang ada *rules* yang dilewatkan. Diperhatikan lagi ya hal-hal seperti itu, di kelas selanjutnya kamu pasti bisa *on point*. Juga jangan suka mengerjakan tugas mepet *deadline*, nanti keteteran. Tetap semangatt, ditunggu cerita selanjutnya wkwkw."

Co-Mentor Words:

"Melissa *omo, omo* sayanggg sekalii tidak bisa ikut ujiann T.T

Tolong untuk ke depannya lebih teliti lagi dengan *deadline* tugas dan absen.... Jangan ketiduran lagii saat jadwal kelas T.T"

— SJTU Team`
},
{
  name: "Nabila",
  progress: "78.32 - LULUS🥳 · \"Pacar Chanyeol\" - \"Nilainya kurang gak, *Laoshi*?😢😭\"",
  message: `Mentor Words:

"Hai, pacar Chanyeol. Lulus nih... pasti sibuk banget ya kelas di saat skripsi. Dan kayaknya kamu juga *volunteer*? Mungkin karena itu juga kamu jadi kurang maksimal di kelas. *You have potentials*, oleh karena itu, saya pribadi menyarankan kamu ambil ulang saja HSK 1B. Perdalam materi dan perbanyak latihan membaca (yang utama!). Semangat!"

"Wihh *congratss*, ya! Sangat *hectic* pasti ikut kelas, skripsian, *and volunteer*-an. *But you did it,* jika kamu memutuskan buat lanjut, saran aku, di*review* lagi materinya. Jadi tidak terlalu kesusahan dan bisa mengimbangi, semangat terus Bilaa."

Co-Mentor Words:

"Nabila pacar peceye alias Park Chanyeol *omo, omo* bagaimana rasanya menjadi pacar Chanyeol..... Untuk Nabila ga ada catatan sii yaaaa. Cuma mungkin ke depannya bisa lebih, lebih, lebih lagi performanyaa... Iya aku tauu mungkin kemarin sibukk banget skripsi, sidang dll tapi masih bisa ikut kelas jugaaaa, yaaa... akuu sudah bilang kamu hebatt pollll *omaygattt* bintang 10."

— SJTU Team`
},
{
  name: "Any",
  progress: "83.21 - LULUS🥳 · \"Aduh, jangan susah-susah, *Laoshi* 😭\"",
  message: `Mentor Words:

"Meskipun sempat sakit dan hampir tidak bisa mengikuti ujian, tapi kamu sudah membuktikan ke diri kamu sendiri bahwa kamu bisa. Catatan dari saya, perbanyak lagi latihan membaca, ya. Nada dan pelafalanmu kadang gak konsisten. Semangat!"

"Selamatt yaa, kamu berhasil melakukannya! Perbanyak lagi kosakatanya, latihan buat kalimat, dan banyak baca agar pelafalannya lebih terlatih. *Next class* HSK 2 tantangan akan lebih komplit jadi persiapkan diri, semangat terus pokoknya."

Co-Mentor Words:

"Ini dia nih yang aktif pas di kelas🤤 keren bangettt pertahankan terus yaa semangatnya. Gak ada catatan yang gimana-gimana sih buat Any, pokoknya udah bagus banget. Terus semangat belajarnya yaa, jangan kasih kendor!"

— SJTU Team`
},
{
  name: "Ila",
  progress: "83.79 - LULUS🥳 · \"Konsisten banget! *Approved!*🏆🥇🎖️\"",
  message: `Mentor Words:

"Wah, Ila! Perkembangannya sangat pesat sekali dari awal pertemuan. Selamat ya, Ila! Pertahankan konsistensi lafal dan nadanya, ya. Lalu juga perbanyak kosakata agar lebih bervariasi kalimatnya. Selamat melanjutkan ke level 2!"

"Jujur, perkembangan kamu sangat okee banget *and* hasilnya kamu dapatkan (lulus kann), *congratss.* Jaga konsistensinya dan jangan cepat puas, perbanyak kosakata dan latihan buat kalimat. Semangat terus yaa."

Co-Mentor Words:

"Ilaaa!! Ini juga mantap banget lumayan aktif di kelas dan rajin banget *raise hand*! gokilll🤙🏻 Pertahankan yaa, Ila! Seneng, deh, lihatnya kalo pada berani aktif gitu. Untuk ke depannya, makin sering-sering lagi yaa interaksinya, udah *good* banget pokoknya!"

— SJTU Team`
},
{
  name: "Azra",
  progress: "42.93 - TIDAK LULUS😢 · \"*Laoshi*, aku gak bisa ikut ujian?😭😭😭\"",
  message: `Mentor Words:

"Huhuhu... sayang sekali Azra tidak bisa mengikuti ujian, ya... Tapi ya mau gimana lagi. *Rules are rules.* Semoga ke depannya, kamu lebih memperhatikan lagi untuk peraturan, lebih teliti dalam tugas, dsb yaaa. Jangan lupa perbanyak latihan untuk nadanya juga. Semangat!"

"Tidak menyangka udah di detik-detik terakhir tapi tidak bisa lanjut ke tahap akhir (ujian), *cause* ada satu syarat yang terlewatkan. Kelas berikutnya harap lebih diperhatikan lagi, lebih aktif, pelafalan dan nada dilatih, juga kosakata diperbanyak. Tetap semangat Azraa!"

Co-Mentor Words:

"Azraaa! Hmmm apa yaa... kita lumayan jarang interaksi nih wkwkwk. Tapi overall aman-aman aja kok! Pesan dari kami mungkin ke depannya bisa lebih aktif lagi, yaa, di kelas, jangan malu-malu buat nanya atau *raise hand*. Semangat teruss, Azra!"

— SJTU Team`
},
{
  name: "Rahma",
  progress: "79.19 - LULUS🥳 · \"*Laoshi*, boleh minta link absen ga🥺🙏🏻\"",
  message: `Mentor Words:

"Lebih sering lagi aktif di kelas, ya! Jangan ragu untuk bertanya kalau tidak paham terhadap materi. Lalu juga perbanyak latihan (yang utama!). DAN tolongg lebih teliti lagi. Semangat!"

"*First of all*, selamat yaa, akhirnya lulus juga! Ini baru permulaan untuk hal ke depannya. Saran dari aku, usahakan lebih aktif lagi di kelas, materinya di*review* lagi sebelum *batch* depan, dan perbanyak kosakata juga latihan buat kalimat *simple*. Semangatt!"

Co-Mentor Words:

"Rahma... wah selamat yaaa akhirnya lulus jugaaa! Untuk catatan sih aman yaa, cuma pengen ngingetin aja biar ke depannya lebih semangat lagi dan makin nampak pas kelas. Udah bagus kok, tapi pasti bisa lebih bagus lagi dong, yaaa? Iya, kan... Semangat terusss!"

— SJTU Team`
},
{
  name: "Aldi",
  progress: "50.61 - TIDAK LULUS😢 · \"*Xie xie, Laoshi*🙏🏻🙏🏻🙏🏻\"",
  message: `Mentor Words:

"Sayang sekali tidak bisa ikut ujian ya, Aldi. Gak apa-apa. Jadikan pelajaran untuk *next opportunity*. Jangan berkecil hati, dicoba lagi *batch* selanjutnya, ya. Catatan untuk Aldi, lebih teliti lagi dan peraturan kelas lebih diperhatikan lagi. Jangan ragu untuk mengkomunikasikan kendala atau apapun terkait pembelajaran. Untuk pelafalan kamu sudah lumayan, namun nadanya kadang gak konsisten. Banyak-banyak dilatih, ya!"

"Aldi, sejauh ini *progress* sangat baik, tapi, di akhir kelas kamu melewatkan 1 hal penting, mungkin karena kesibukan atau apa jadi tidak dikerjakan. Peraturan adalah hal yang mutlak dan sudah disampaikan, *so* perhatikan lagi hal-hal tersebut. Jangan patah semangat, anggap ini sebagai kesempatan buat kamu untuk belajar lebih banyak lagi. Semangat!"

Co-Mentor Words:

"Reynaldiii! Hmmm ini nih, di awal-awal kelas aktif bangett *omaygattt*, tapi kok akhir-akhir ini suka menghilang?? Wkwkwk lagi sibuk banget yaaa? Gapapa sih, paham kok kalo pada punya kesibukan, tapi sayang banget loh kalo performanya jadi turun. *Next time* tolong lebih diseimbangkan lagi yaa, jadwalnya biar ga ketinggalan. Semangat Aldi!!"

— SJTU Team`
},
{
  name: "Tifa",
  progress: "70.09 - TIDAK LULUS😢 · \"Duta JJ🤟🏻😎🤟🏻😎\"",
  message: `Mentor Words:

"Dalam belajar, yang perlu kita fokuskan adalah pemahamannya, bukan berapa banyak salah atau benarnya. Jadi, pastikan kamu paham dan mengerti apa yang kamu kerjakan dulu, ya! Lebih perhatikan lagi apa yang disampaikan oleh *mentor* dan *co-mentor*. Perhatian pada diri sendiri, jangan terlalu bergantung kepada orang lain. Jangan terlalu banyak minder dan takut, itu sama aja kamu menyabotase diri kamu sendiri. Pesan/catatan ini jangan cuma dibaca, ya... tapi tolong bangeettt diresapi dan diamalkan dengan baik. Demi kebaikanmu sendiri juga. Jangan lupa juga selalu latihan membaca dan perbanyak kosakata. Pelafalan dan nada masih gak konsisten. Semangat!"

"Hmm Tifa, gimana yaa? Bingung aku😀😃. Keaktifan kamu sudah bagus, tapi terkait materi dan tugas yang telah diberikan masih terdapat banyak bagian yang tidak terlalu dipahami sepertinya, sehingga kesalahan yang dibuat pun cukup banyak. *We knoww* kamu dah berusaha dan selalu nanyain terkait pelafalan yang kurang, itu sangat bagus. Tapi kamu pun juga harus bisa melihat kurangnya kamu di bagian mana lagi. Juga perhatikan masukan yang diberikan ketika kelas berlangsung. Terkait ujian kemarin dari segi kosakata kamu masih sangat kurang, *so* perbanyak kosakatanya terutama hsk 1 (bisa dipahami) dan latihan buat kalimat *simple*. Semangat buat Tifa, jangan menyerah, kamu pasti bisa!"

Co-Mentor Words:

"Ummyyy!!! Hmmm buat Ummy, aku perhatiin selama ini masih kurang aktif nih di kelas... Sayang banget lohh! Pesan dari aku, semoga ke depannya Ummy bisa lebih aktif lagi dan berani *show up* yaaa. Jangan nunggu dipanggil atau ditunjuk dulu baru bersuara, yuk belajar inisiatif buat *raise hand* atau nanya duluan. Semangat terusss ya, Ummy!"

— SJTU Team`
},
{
  name: "Uswa",
  progress: "86.27 - LULUS🥳 · \"Si Paling Takut Nilainya Dikurangi🤣🤣\"",
  message: `Mentor Words:

"Akhirnya ya, Uswaa semua usaha terbayarkan. Selamat sudah lulus! Pertahankan semangat belajar dan tentu saja, jangan sampai kendor latihannya agar semakin lancar. Semangat!"

"*Yeahh congratss* Uswa! *Next class* lebih semangat lagii dan pertahankan performanya. Kosakata diperbanyak lagi, latihan baca, buat kalimat semuanya dilatih teruss, agar makin okee. Semangat!"

Co-Mentor Words:

"Uswaaa! Halo Uswa, selamat yaaa! Untuk Uswa catatannya ga aneh-aneh sih, cuma tolong dipertahankan aja yang udah bagus, dan kalo bisa ditingkatkan lagi interaksinya yaaa. Jangan sungkan-sungkan buat nimbrung di kelas. Semangat terus belajarnya!!"

— SJTU Team`
},
{
  name: "Xaveria",
  progress: "64.79 - TIDAK LULUS😢 · \"Bentar, *Laoshi*✋🏻🤚🏻\"",
  message: `Mentor Words:

"Xaveria, ketika kamu tidak mengetahui sesuatu, tidak ada salahnya mengatakan bahwa kamu tidak tahu. Jangan memaksakan sesuatu yang kamu sendiri tidak tahu apakah itu benar atau salah. PERBANYAK LATIHAN membaca dan menulis. Terutama membaca, karena pelafalan kamu masih kurang banget, apalagi nada. Lalu juga kurang-kurangi pakai *translation tools* atau AI, yaaa. Boleh saja menggunakan, namun harus tahu kapan dan di mana bisa memakainya. *Good luck!*"

"Xaveria, yahh. Kamu sendiri pun mungkin tau kurangnya di bagian mana untuk beberapa hal. Terutama pelafalan (dipelajari lagi cara lafalnya gimana) kadang jika dicontohkan dah bisa, tapi setelahnya balik lagi ke setelan awal 🙂 Nada pun masih kurang. Terkait materi selama KBM dan tugas yang diberikan aku rasa cukup oke, tapi gak tau itu kamu benar-benar paham/tidak (harusnya paham sih). Jangan kebiasaan menggunakan AI or semacamnya apalagi saat ujian, itu sama saja kamu memperlihatkan kepada kami bahwa kamu memang belum benar-benar bisa. Jadi untuk kelas berikutnya, kamu lebih aktif dan bertanya jika ada hal yang tidak dipahami, jangan mengiyakan sesuatu yang kamu sendiri pun masih bingung. Aku harap ini tidak membuatmu menyerah, tapi dijadikan pelajaran dan tidak mengulang kesalahan yang sama. *Nextt* lebih baik lagi dan semangatt Xaveria!"

Co-Mentor Words:

"Xaveriaaa! Kemauan dan semangat belajar bahasa Mandarinnya udah mantap, tapi pas di kelas kok masih kurang aktif niiiih? Sayang banget lhooo. Ke depannya tolong lebih berani dan banyak interaksi lagi yaaa! Jangan nunggu dipanggil duluan baru jawab hehehe. Harus lebih inisiatif yaa biar bahasa Mandarinnya makin *cas cis cus*. Semangattt terus Xaveria!"

— SJTU Team`
},
{
  name: "Yuniar",
  progress: "75.14 - TIDAK LULUS😢 · \"Bener gak, *Laoshi*?\"\"Eh, udah bener belum ya, *Laoshi*?\"",
  message: `Mentor Words:

"*Oh naurr* Yuniar kamu tidak lulus, ya.,... Selisih tipis, namun mau bagaimana lagi... Untuk pelafalan sudah lumayan, namun perlu latihan lagi di *shengdiao*, yaa. Jangan menyerah dan jangan berkecil hati, tetap semangat dan saya yakin *next batch* kamu akan lulus ke level selanjutnya! *Jiayou!*"

"Hhuhu, nilainya belum mencapai KKM, tapi kamu dah bagus kok. Hanya perlu ditingkatkan lagi pemahamannya terkait materi, jika ada yang tidak dipahami, jangan segan untuk bertanya. Perbanyak kosakata dan latihan buat kalimat *simple*. *Next batch*, pasti bisa lulus dengan nilai dan pemahaman yang memuaskan. Jadi, anggap ini sebagai kesempatan kamu belajar lebih banyak lagi. Jangan patah semangat, terus belajar, *cause* kita mau *healing* ke China hehe. *Good luck!*"

Co-Mentor Words:

"Yuniarrr! Hmmm apa yaa buat Yuniar... *All good* sih sejauh ini, ga ada masalah! Cuma pesannya tetep sama yaa, jangan lelah buat belajar dan tingkatkan lagi performanya di kelas biar makin bersinar wkwkwk. Kalo ada yang bingung langsung tanya aja, oke?? Sukses terus yaaa, Yuniar!"

— SJTU Team`
},
];

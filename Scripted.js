$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 1250);

 e.preventDefault();
});
//Nama Kelompok
//     Kelas DDAP - B
//     Nama Kelompok Prakerla
//     Ilham Setyo Nugroho (195150400111037)
//     Wahyu Nur Arifin (195150407111007)
//     M Raihan Agust N (195150407111010)
//     Akhir nama kelompok
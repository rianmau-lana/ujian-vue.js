<template>
  <div>
    <h1 style="text-align: center;">{{msg}}</h1>
    <h3 style="text-align: right;" :class="[score >= 7 ? 'diatasKKM' : 'dibawahKKM']">Nilai : {{ score }}</h3>
  
    <div class="alert alert-success" v-if="score >= 7">Berhasil, kamu keren</div>
    <div class="alert alert-danger" v-else>Gagal, ayo jangan patah semangat</div>
    
      

<table>
  <tr>
    <td style="width:80%;" >
      <div class="card" >
        <div class="card-header">
          <h4>Soal</h4>
        </div>
        <div class="card-body" style="overflow-y: scroll;">
          <div v-for="(soal, indexsoal) in questions">
            <p>{{indexsoal+1}}. {{soal.deskripsi}} </p>
            <div v-for="(pilihans, indexpiilhan) in soal.pilihan">
              <input type="radio" @click="checkAnswer(indexsoal, indexpiilhan)" :value="pilihans[0]" :name="indexsoal">
              <span v-text="pilihans[0]"></span>
            </div>
          </div>
        </div>
      </div>
    </td>
    <td style="width:10%;" >
      <h4>Jawaban Benar, </h4>
      <ul>
        <li v-for="no_soal in jawabanbenar">No. {{ no_soal+1 }}</li>
      </ul>
    </td>
  </tr>
</table>
    


  </div>

</template>

<script>
export default {
  name: 'Ujian',
  data () {
    return {
      msg : 'Selamat Mengerjakan',
      score: 0,
      jawabanbenar : [],
      jawabansalah : [],
      questions : [
        {
          deskripsi : "Ayahnya ibu siapanya aku ?",
          pilihan : [
            ["Kakek", true],
            ["Nenek"],
            ["Cucu"],
            ["Anak"]
          ]
        },
        {
          deskripsi : "Bandung Kota",
          pilihan : [
            ["Sampah"],
            ["Kembang", true],
            ["Hujan"],
            ["Tahu"]
          ]
        },
        {
          deskripsi : "Indonesia tanah air ...... ",
          pilihan : [
            ["Aku"],
            ["Abdi"],
            ["Beta", true],
            ["Ane"]
          ]
        },
        {
          deskripsi : "Kapan waktu libur",
          pilihan : [
            ["Senin"],
            ["Selasa"],
            ["Kamis"],
            ["Minggu", true]
          ]
        },
        {
          deskripsi : "Gerakan Di tii di jawabarat di pimpin oleh",
          pilihan : [
            ["Sekarmadji Mardijan Kartosuwiryo",true],
            ["Ujang Hernandes"],
            ["Raymond Westerling"],
            ["U Nu"]
          ]
        },
        {
          deskripsi : "Mawar .... semuanya indah",
          pilihan : [
            ["tulip"],
            ["kamboja"],
            ["melati", true],
            ["lavender"]
          ]
        },
        {
          deskripsi : "Buang sampah ke ?",
          pilihan : [
            ["Tong Sampah", true],
            ["Sungai"],
            ["Kolong Bangku"],
            ["Lantai"]
          ]
        },
        {
          deskripsi : "Jalur Ke PTN pake rapot?",
          pilihan : [
            ["SBMPTN"],
            ["SNMTN",true],
            ["PMDK"],
            ["STAN"]
          ]
        },
        {
          deskripsi : "Aku siapa",
          pilihan : [
            ["Manusia",true],
            ["Hewan"],
            ["Tumbuhan"],
            ["Jin"]
          ]
        },
        {
          deskripsi : "Anak Kakaku siapanya aku",
          pilihan : [
            ["Cucu"],
            ["Menantu"],
            ["Keponakan",true],
            ["Besan"]
          ]
        },
      ]
    }
  },
  methods:{
    checkAnswer(indexsoal, indexpiilhan) {
      if(this.questions[indexsoal].pilihan[indexpiilhan][1]){
        if(this.jawabanbenar.indexOf(indexsoal) == -1){
          this.jawabanbenar.push(indexsoal);
        }
        if(this.jawabansalah.indexOf(indexsoal) != -1){
          this.jawabansalah.splice(this.jawabansalah.indexOf(indexsoal),1);
        }
      }else{
        if(this.jawabanbenar.indexOf(indexsoal) != -1){
          this.jawabanbenar.splice(this.jawabanbenar.indexOf(indexsoal),1);
          this.jawabansalah.push(indexsoal);
        }else if(this.jawabansalah.indexOf(indexsoal) != -1){

        }else{
          this.jawabansalah.push(indexsoal);
        }
      }
      this.score = this.jawabanbenar.length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

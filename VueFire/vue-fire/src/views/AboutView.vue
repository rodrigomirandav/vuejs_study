<template>
  <div class="about">
    <h1>This is an about page</h1>
    <table border="1px">
      <thead>
        <th>Nome</th>
        <th>Location</th>
        <th>Preço</th>
      </thead>
      <tbody>
        <tr v-for="cafe in cafeColletion" :key="cafe.name">
          <td>{{ cafe.name }}</td>
          <td>{{ cafe.location }}</td>
          <td>{{ cafe.price }}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import { collection } from '@firebase/firestore';
import { useFirestore, useCollection } from 'vuefire';

export default {
  setup(){
    const db = useFirestore()

    const cafeColletion = useCollection(collection(db, "cafes"))

    return {
      cafeColletion
    }
  }
}
// Original
//const q = query(collection(db, "cafes"))
//const querySnapshot = await getDocs(q)
//querySnapshot.forEach((doc) => {
//  console.log(doc.id, " => ", doc.data())
//})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

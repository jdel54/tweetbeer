import { firestore } from '../../../firebase/admin'

export default (req, res) => {
  const { query } = req
  const { id } = query

    firestore
      .collection("Bweets")
      .doc(id)
      .get()
      .then(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        res.json({
          ...data,
          id,
          createdAt: +createdAt.toDate()
        })
        resolve()
      })
      .catch((err) => {
        res.status(404).end()
      })
  }
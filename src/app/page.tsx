import styles from './page.module.css'
import MultiOptionsMission from './components/MultiOptionsMission'

export default function Home() {
  return (
    <main className={styles.main}>
      <MultiOptionsMission missionID={0} missionName={'בונוס ביקורת הציוד'} missionCreterias={
        [{creteria: 'כל הציוד שלכם נכנס באזור הביקורת הקטן:', scoringOptions: [{option: 'כן', score: 20}, {option: 'לא', score: 0}]}]
        } />
      <MultiOptionsMission missionID={2} missionName={'קיבולת לא מנוצלת'} missionCreterias={
        [{creteria: 'המכולה עם הצירים סגורה לגמרי:', scoringOptions: [{option: 'מלאה לגמרי בתכולה', score: 30}, {option: 'מלאה חלקית בתכולה', score: 20}, {option: 'ריקה', score: 0}]}]
        } />
    </main>
  )
}

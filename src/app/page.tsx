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
      <MultiOptionsMission missionID={4} missionName={'מסע ההובלה'} missionCreterias={
        [{creteria: 'המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח:', scoringOptions: [{option: 'כן', score: 10}, {option: 'לא', score: 0}]},
         {creteria: 'המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצע על השטיח:', scoringOptions:[{option: 'כן', score: 10}, {option: 'לא', score: 0}]}]
        } />
      <MultiOptionsMission missionID={8} missionName={'הצנחת מטען'} missionCreterias={
        [{creteria: 'חבילת האוכל הופרדה מהמסוק שלכם:', scoringOptions: [{option: 'כן', score: 20}, {option: 'לא', score: 0}]},
         {creteria: 'חבילת האוכל הופרדה מהמסוק בזירה השנייה, והיא לגמרי בתוך עיגול ה- CONNECT CARGO שלכם:', scoringOptions:[{option: 'כן', score: 10}, {option: 'לא', score: 0}]},
         {creteria: 'שתי הקבוצות הפרידו את חבילת האוכל מהמסוק בזירה שלהן:', scoringOptions:[{option: 'כן', score: 10}, {option: 'לא', score: 0}]}]
        } />
    </main>
  )
}

import React from 'react'
import styles from '../styles/multiOptionMission.module.css'

type ScoreCreterias = {
  creteria: string,
  scoringOptions: ScoreOptions[]
}

type ScoreOptions = {
  option: string,
  score: number
}

type Props = {
  missionID: number,
  missionName: string,
  missionCreterias: ScoreCreterias[]
}

const MultiOptionsMission = ({missionID, missionName, missionCreterias}: Props) => {
  return (
    <div className={styles.div}>
      <div className={styles.missionHeader}>
        <h1>M{missionID < 10 ? "0" + missionID : missionID} | </h1>
        <h1>{missionName}</h1>
      </div>

      {missionCreterias.map((creteria, index) => (
        <div className={styles.missionCreateria} key={index}>
          <h2 className={styles.missionCreateriaLabel}>{creteria.creteria}</h2>
          {creteria.scoringOptions.map((scoringOption, index) => (<button className={styles.button} key={index}>{scoringOption.option}</button>))}
      </div>
      ))}
    </div>
  )
}

export default MultiOptionsMission
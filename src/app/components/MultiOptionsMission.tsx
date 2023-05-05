"use client"
import React, { useState, useEffect } from 'react'
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
  const [chosenOptions, setChosenOptions] = useState<number[]>([]);

  useEffect(() => console.log("HELLO"), [missionCreterias])

  const setActiveButton = (creteriaIndex:number, score:number) => {
    setChosenOptions([chosenOptions[creteriaIndex] = score])
  }


  return (
    <div className={styles.div}>
      <div className={styles.missionHeader}>
        <h1>M{missionID < 10 ? "0" + missionID : missionID} | </h1>
        <h1>{missionName}</h1>
      </div>

      {missionCreterias.map((creteria, creteriaIndex) => (
        <div className={styles.missionCreateria} key={creteriaIndex}>
          <h2 className={styles.missionCreateriaLabel}>{creteria.creteria}</h2>
          {creteria.scoringOptions.map((scoringOption, scroingOptionIndex) => (<button className={chosenOptions[creteriaIndex] === scoringOption.score ? styles.buttonActive : styles.button} key={scroingOptionIndex} onClick={() => setActiveButton(creteriaIndex, scoringOption.score)}>{scoringOption.option}</button>))}
      </div>
      ))}
    </div>
  )
}

export default MultiOptionsMission
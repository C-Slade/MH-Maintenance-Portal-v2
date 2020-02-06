import React from 'react';
import TrainingButton from './training-button';
import uuid from 'uuid';

const SelectTraining = () => {
    const trainingNames = ['part 145', 'part 135', 'fuel', 'human factors (pilots)']
    const trainingPaths = ['part-145', 'part-135', 'fuel', 'human-factors']
    return (
        <>
            <h2>Select Training</h2>
            <div className="select-training">
                {trainingNames.map((name, index) => <TrainingButton key={uuid.v4()} name={name} href={trainingPaths[index]} count={index} />)}
            </div>
        </>
    )
}

export default SelectTraining;
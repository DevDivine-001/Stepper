import { useState } from 'react'
import '../../CSS/Stepper.css'
import { TiTick } from 'react-icons/ti'
const Stepper = () => {
    const steps = ["Register", "OTP verifyEmail", "Login"]
    const [currentStep, setCurrentStep] = useState(1)
    const [CompleteSteps, setCompleteSteps] = useState(false)

    return (
        <>
            <div className="flex  justify-center items-center text-center">
                {
                    steps?.map((steps, i) => (
                        <div className={`steps-child ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || CompleteSteps) && "complete"}`} key={i}>
                            <div className='steps'>{(i + 1 < currentStep || CompleteSteps) ? <TiTick size={24} /> : i + 1}</div>
                            <span className=" text-gray-300">{steps}</span>

                        </div>
                    ))
                }

            </div>
            {
                !CompleteSteps && (
                    <button className='btn' onClick={() => {
                        currentStep === steps.length
                            ? setCompleteSteps(true) :
                            setCurrentStep((prev) => prev + 1)
                    }}>
                        {currentStep === steps.length ? "Finish" : "Next"}
                    </button>
                )
            }
        </>
    )

}

export default Stepper
import { Exercise } from '@/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class ExercisesStore {

    exercises:Exercise[] = []

    constructor(){

        makeAutoObservable(this)
        if(typeof window !== 'undefined'){
            makePersistable(this,
                {
                    name:'ExercisesStore',
                    properties:[
                        'exercises'
                    ],
                    storage:window.localStorage
                }
            )
        }
    }

    setExercises(exercisesArray:Exercise[]){
        runInAction(()=>{
            this.exercises = exercisesArray
        })
    }
}

const exercisesStore = new ExercisesStore()

export { exercisesStore, ExercisesStore }
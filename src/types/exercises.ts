export interface ExerciseData {
    exerciseInfo: ExerciseInfo;
    registers:    Register[];
    userId:       string | undefined;
}

export interface ExerciseInfo {
    id:          string;
    created_at:  Date;
    name:        string;
    description: string;
    area:        string;
}

export interface Register {
    id:          number;
    created_at:  Date;
    exercise_id: string;
    reps:        number;
    series:      number;
    weight:      number | null;
    own_weight:  boolean;
    user_id:     string;
}

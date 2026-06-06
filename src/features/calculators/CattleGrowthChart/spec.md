# Cattle Growth Chart Spec

## Goal
Track cattle weight gain, calculate ADG (Average Daily Gain), and project target dates/weights.

## Inputs
- **Current Weight (lbs)**: Current weight of the animal.
- **Previous Weight (lbs)**: Previous weight of the animal.
- **Days Between Weigh-Ins**: Number of days elapsed between weight observations.
- **Target Weight (lbs)**: Desired final weight.
- **Optional**: Animal ID, Target Date (or Future Days), Breed, Sex, Notes, Birth Weight.

## Formulas
- **ADG**: `(Current Weight - Previous Weight) / Days Between Weigh-Ins`
- **Remaining Gain**: `Target Weight - Current Weight`
- **Days to Target**: `Remaining Gain / ADG`
- **Projected Weight**: `Current Weight + (ADG * Future Days)`

## Edge Cases
- Warn if ADG is zero or negative. Do not project days.
- Target weight below current weight shouldn't project days properly.

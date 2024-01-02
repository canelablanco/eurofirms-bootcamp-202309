# App

## Intro

This application is used to create diets for patients with PCOS

![](
)

## Functional Description

This application allows you to create your own diets, save your favorites, and modify your data to create new diets

### Use Cases
- Update profile (height, weight, habits, etc...)
- Create diet
- Delete diet
- Save diet

## Technical Description

### Data Model

User
- id (string, unique, required)
- name (string, required)
- email (string, unique, required)
- password (string, required)
- saved ([diet id])

Profile
- id (string, unique, required)
- height (number, required)
- weight (number, required)
- age (number, required)
- physical activity level (Sedentary, light activity, Moderate activity, intense activity, very intense activity)
- user (user id, string, required)

Diet
- id (string, unique, required)
- dailyDiet (dailyDiet id)
- userProfile (profile id, required)

DailyDiet
- id
- monday (monday)
- tuesday (tuesday)
- wednesday (wednesday)
- thurdays (thurdays)
- friday (friday)
- saturday (saturday)
- sunday (sunday)

Monday
- id
- breakfast (string)
- snack (string)
- lunch (string)
- snack (string)
- dinner (string)

Tuesday
- id
- breakfast (string)
- snack (string)
- lunch (string)
- snack (string)
- dinner (string)

Wednesday
- id
- breakfast (string)
- snack (string)
- lunch (string)
- snack (string)
- dinner (string)

Thursday
- id
- breakfast (string)
- snack (string)
- lunch (string)
- snack (string)
- dinner (string)

Friday
- id
- breakfast (string)
- snack (string)
- lunch (string)
- snack (string)
- dinner (string)

Saturday
- id
- breakfast (string)
- snack (string)
- lunch (string)
- snack (string)
- dinner (string)

Sunday
- id
- breakfast (string)
- snack (string)
- lunch (string)
- snack (string)
- dinner (string)
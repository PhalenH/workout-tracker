starting async calls for routes
 app.get("/api/workouts", async (req, res) => {
     try {
       const workoutData = await db.Workout.find({});

       return res.json(workoutData);
     } catch (err) {
       res.status(500).json(err);
     }
   });

   app.put("/api/workouts/:id", async (req, res) => {
     try {
       const workoutData = await db.Workout.updateOne(
         {},
         {
           where: {},
         }
       );

      return res.json(workoutData);
     } catch (err) {
       res.status(500).json(err);
     }
   });

   app.post("/api/workouts", async (req, res) => {
     try {
       const workoutData = await db.Workout.create;

       return res.json(workoutData);
     } catch (err) {
       res.status(500).json(err);
     }
   });

   app.get("/api/workouts/range", async (req, res) => {
     try {
       const workoutData = await db.Workout.find({});

       return res.json(workoutData);
     } catch (err) {
       res.status(500).json(err);
     }
   });
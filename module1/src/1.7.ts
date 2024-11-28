{
  //spread operator
  //rest operator
  //destructuring

  //learn spread operator
  const bors1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];

  bors1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //Learn rest operator

  // এই নিয়মে কোনো প্রকার নতুন বন্ধু যোগ করতে পারবনা। যদি বন্ধু যোগ করতে হয় তবে প্রতিবার প্যারামিটারে বৃদ্ধি করতে হবে।

  // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
  //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  // }

  // greetFriends('Abul', 'Kabul', 'Babul', );

  // এই নিয়মে যত ইচ্ছা নতুন বন্ধু যোগ করতে পারব। যদি বন্ধু যোগ করতে হয় তবে প্রতিবার প্যারামিটারে বৃদ্ধি করতে হবে না। এটা Dynamically হবে।
  //learn rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Kabul", "Babul", "Ubul", "Chubul");
}

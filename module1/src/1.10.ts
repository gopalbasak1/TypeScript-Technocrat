{
  //

  //union types

  // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'; //aeta ka bola string literal type

  // type FullstackDeveloper = 'frontendDeveloper' | 'fullstackDeveloper'

  // type Developer = FrontendDeveloper | FullstackDeveloper

  // const newDeveloper : FrontendDeveloper = 'juniorDeveloper';

  // type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male"| "female";
  //     bloodGroup: "O+"|"A+"|"AB+"
  // }

  // const user1: User = {
  //     name: 'gopal',
  //     gender: 'male',
  //     bloodGroup: 'A+'
  // }

  //intersection types

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}

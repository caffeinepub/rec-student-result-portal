import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Text "mo:core/Text";



actor {
  type Course = {
    name : Text;
    credits : Nat;
    grade : Text;
    gradePoint : Nat;
  };

  type Student = {
    loginId : Text;
    password : Text;
    name : Text;
    registerNumber : Text;
    programme : Text;
    academicYear : Text;
    semester : Nat;
    sgpa : Float;
    courses : [Course];
  };

  type SessionToken = Text;

  let validStudent : Student = {
    loginId = "yashwanth.c.2024.aiml@rajalakshmi.edu.in";
    password = "241501251";
    name = "Yashwanth C";
    registerNumber = "241501251";
    programme = "B.E Artificial Intelligence and Machine Learning";
    academicYear = "2025 - 2026";
    semester = 3;
    sgpa = 8.3;
    courses = [
      {
        name = "Design and Analysis of Algorithms";
        credits = 4;
        grade = "A";
        gradePoint = 9;
      },
      {
        name = "Database Management Systems";
        credits = 5;
        grade = "A";
        gradePoint = 9;
      },
      {
        name = "Object Oriented Programming using Java";
        credits = 4;
        grade = "A+";
        gradePoint = 10;
      },
      {
        name = "Fundamentals of Machine Learning";
        credits = 4;
        grade = "A";
        gradePoint = 9;
      },
      {
        name = "Environmental Science and Engineering";
        credits = 0;
        grade = "A";
        gradePoint = 9;
      },
      {
        name = "Probability and Inferential Statistics";
        credits = 4;
        grade = "A";
        gradePoint = 9;
      },
      {
        name = "Discrete Mathematics for AI";
        credits = 4;
        grade = "A";
        gradePoint = 9;
      },
    ];
  };

  let sessions = Map.empty<SessionToken, Student>();

  public shared ({ caller }) func login(loginId : Text, password : Text) : async SessionToken {
    if (Text.equal(loginId, validStudent.loginId) and Text.equal(password, validStudent.password)) {
      let timestamp = Time.now();
      let token = loginId.concat(timestamp.toText());
      sessions.add(token, validStudent);
      token;
    } else {
      Runtime.trap("Invalid credentials");
    };
  };

  public query ({ caller }) func getStudentDetails(token : SessionToken) : async Student {
    switch (sessions.get(token)) {
      case (?student) { student };
      case (null) { Runtime.trap("Session expired or invalid token") };
    };
  };
};

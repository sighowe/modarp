class Task{
  //Instance Variable
  Time scheduledTime;
  String taskInfo;
  boolean taskCompleted;

  //Constructors
  public Task(Time scheduleTime){
    this.scheduleTime = scheduleTime;
    taskInfo = "";
    taskCompleted = false;
  }

  public Task(Time scheduleTime, String taskInfo){
    this.scheduleTime = scheduleTime;
    this.taskInfo = taskInfo;
    taskCompleted = false;
  }

  public Task(String taskInfo){
    this.taskInfo = taskInfo;
    scheduleTime = new Time();
    taskCompleted = false;
  }

  public Task(){
    taskInfo = "";
    scheduleTime = new Time();
    taskCompleted = false;
  }

  //Accessors
  public Time getTime(){
    return scheduleTime;
  }

  public String getTaskInfo(){
    return taskInfo;
  }

  //Mutators
  public void setTime(Time scheduleTime){
    this.scheduleTime = scheduleTime;
  }
  public void markTaskComplete(){
    taskCompleted = true;
  }
  public void markTaskIncomplete(){
    taskCompleted = false;
  }


  //debugging tools
  public String toString(){
    return("---\nTask: " + taskInfo + "\nDate: " + scheduleTime + "\n---");
  }
}

class Task{
  //Instance Variable
  Time scheduledTime;
  String taskInfo;
  boolean taskCompleted;

  //Constructors
  public Task(Time scheduledTime){
    this.scheduledTime = scheduledTime;
    taskInfo = "";
    taskCompleted = false;
  }

  public Task(Time scheduledTime, String taskInfo){
    this.scheduledTime = scheduledTime;
    this.taskInfo = taskInfo;
    taskCompleted = false;
  }

  public Task(String taskInfo){
    this.taskInfo = taskInfo;
    scheduledTime = new Time();
    taskCompleted = false;
  }

  public Task(){
    taskInfo = "";
    scheduledTime = new Time();
    taskCompleted = false;
  }

  //Accessors
  public Time getTime(){
    return scheduledTime;
  }

  public String getTaskInfo(){
    return taskInfo;
  }

  //Mutators
  public void setTime(Time scheduledTime){
    this.scheduledTime = scheduledTime;
  }
  public void markTaskComplete(){
    taskCompleted = true;
  }
  public void markTaskIncomplete(){
    taskCompleted = false;
  }


  //debugging tools
  public String toString(){
    return("---\nTask: " + taskInfo + "\nDate: " + scheduledTime + "\n---");
  }
}

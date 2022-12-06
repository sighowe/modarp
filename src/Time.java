public class Time {

    int day, month, year, hour, minute;

//Constructors
    public Time(){
        day = -1;
        month = -1;
        year = -1;
        hour = -1;
        minute = -1;
    }
    public Time(int day, int month, int year){
        this.day = day;
        this.month = month;
        this.year = year;
        hour = -1;
        minute = -1;
    }
    public Time(int day, int month, int year, int hour, int minute) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.hour = hour;
        this.minute = minute;
    }
    //Mutators
    public void setDate(int day, int month, int year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    public void setTime(int hour, int minute){
        this.hour = hour;
        this.minute = minute;
    }

    //Getters
    public int getDay(){
        return day;
    }
    public int getMonth(){
        return month;
    }
    public int getYear(){
        return year;
    }
    public int getHour(){
        return hour;
    }
    public int getMinute(){
        return minute;
    }
    public String toString(){
        return("" + hour + ':' + minute + " " + day + '/' + month + '/' + year);
    }

}

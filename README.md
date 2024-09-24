# debugdeployment_project_To-Do-list
A to-do list application allows you to manage your tasks. You can add tasks, check them off as completed, and delete them.
1.Add tasks: You can enter new tasks and the application stores them in a list.
2.Check tasks:Once you've completed a task, you can mark it as checked, often by ticking a box or changing its font style.
3.Delete tasks: If a task is no longer relevant, you can remove it from the list entirely.
This functionality helps you stay organized and track your progress.

![Screenshot 2024-03-02 115304](https://github.com/Sayyeda-Anam/debugdeployment_project_To-Do-list/assets/152056623/7f733ba6-7544-4f30-bced-5ac829aae9f6)


file upload code

protected void Button1_Click(object sender, EventArgs e)
{
    if(FileUpload1.PostedFile.ContentLength >0)
{
        FileUpload1.SaveAs(Server.MapPath("khandot") + "\\" +FileUpload1.PostedFile.FileName);
 Label1.Text = "UPLOADED SUCCESSFULLY" + Server.MapPath("khandot");
 }
 else
 {
Label1.Text = "PLEASE SELECT FILE. FILE NOT UPLOADED";
    }
}


calculator

protected void Button1_Click(object sender, EventArgs e)
{
    int no1, no2;
    double result;

    no1 = Convert.ToInt32(TextBox1.Text);
    no2 = Convert.ToInt32(TextBox2.Text);

    result = no1 + no2;
    Label1.Text = "Addition is: " + result;
}

radio button and checkbox


protected void Button1_Click(object sender, EventArgs e)
{
    int marks;
    double per;
    marks = 0;

    if (RadioButton1.Checked)
    {
        marks = marks + 1;
    }

    if (RadioButton5.Checked)
    {
        marks = marks + 1;
    }

    if (RadioButton10.Checked)
    {
        marks = marks + 1;
    }

    if (CheckBox1.Checked && CheckBox2.Checked && CheckBox3.Checked)
    {
        marks = marks + 1;
    }

    per = marks / 4 * 100;

    Label1.Text = "YOU HAVE ANSWERED " + marks + " OUT OF 4 QUESTIONS AND YOU GOT " + per + "%";
}


validation

protected void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs args)
{
    if (args.Value.Length > 8)
    {
        args.IsValid = true;
    }
    else
    {
        args.IsValid = false;
    }
}

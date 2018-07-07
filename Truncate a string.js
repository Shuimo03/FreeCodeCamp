function truncate(str, num) {

    if(str.length > num)
    {
        if(num > 3)
        {
            return str.substr(0,num-3)+'...';
        }
        else
        {
            return str.substr(0,num)+'...';
        }
    }
    else
    {
        return str;
    }
  }

  
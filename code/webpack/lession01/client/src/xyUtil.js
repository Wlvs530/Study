var XyUtil = {};
XyUtil.CreateHttpRequest = function()
{
	if( window.XMLHttpRequest )
	{
		return new XMLHttpRequest();
	}
	else
	{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
};

XyUtil.hasClass = function( elements,cName )
{ 
	return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)")  ); 
}; 

XyUtil.addClass = function( elements,cName )
{ 
	if( !XyUtil.hasClass( elements,cName ) )
	{ 
		elements.className += " " + cName; 
	}
};

XyUtil.removeClass = function( elements,cName )
{ 
	if( XyUtil.hasClass( elements,cName ) )
	{
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
	}
};

XyUtil.GetQueryString = function(name) 
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) 
    	return unescape(r[2]);
    else
        return null;
}
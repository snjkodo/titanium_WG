package com.companyname.appname;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class WgAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public WgAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
					properties.setString("ti.deploytype", "test");
	}
	
	public String getId() {
		return "com.companyname.appname";
	}
	
	public String getName() {
		return "WG";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "shinji";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2012 by shinji";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "05f958d2-1680-491f-83bc-722d8156c159";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}

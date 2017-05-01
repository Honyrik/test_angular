package controllers;

import models.GlobalWLPParam;
import play.mvc.Controller;
import play.mvc.Result;
import java.util.List;

import java.util.Map;
import java.util.Set;

/**
 * Created by sky on 17.04.2016.
 */
public class Gate extends Controller {
    public Result Global () {
        response().setContentType("application/json");
        List<GlobalWLPParam> params = GlobalWLPParam.find.where().eq("name", request().getQueryString("name")).findList();

        return ok(play.libs.Json.toJson(params));
    }
}

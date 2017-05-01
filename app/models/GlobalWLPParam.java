package models;
import java.util.*;
import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.format.*;
import play.data.validation.*;

/**
 * Created by sky on 17.04.2016.
 */
@Entity
public class GlobalWLPParam extends Model {
    public String getParam() {
        return param;
    }

    public void setParam(String param) {
        this.param = param;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    private Long id;

    @ManyToOne
    @Column(nullable = false, length=255)
    private String name;
    @Column(length=2048)
    private String param;

    public static Finder<Long, GlobalWLPParam> find = new Finder<Long, GlobalWLPParam>(GlobalWLPParam.class);
}

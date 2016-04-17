package models;
import play.data.validation.*;
import play.db.ebean.Model;
import javax.persistence.*;

/**
 * Created by sky on 17.04.2016.
 */
@Entity
public class GlobalWLPParam extends Model {
    @Id
    public Long id;
    @Column(nullable = false, length=255)
    public String name;
    @Column(length=2048)
    public String param;
}

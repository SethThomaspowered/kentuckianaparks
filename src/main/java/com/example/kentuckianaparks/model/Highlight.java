package com.example.kentuckianaparks.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "highlights")
public class Highlight {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String features;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="park_id")
    private Park park;

    public Highlight(Long id, String name, String features, Park park) {
        this.id = id;
        this.name = name;
        this.features = features;
        this.park = park;
    }

    public Highlight() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public Park getPark() {
        return park;
    }

    public void setPark(Park park) {
        this.park = park;
    }
}

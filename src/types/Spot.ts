// public class Spot {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private int x;
//     private int y;
//     private int z;

//     @ManyToOne
//     @JoinColumn(name = "scene_id")
//     private Scene scene;

//     private String name;

//     private String description;

//     private String videoUrl;
// }

export default interface Spot{
    id: number,
    x: number,
    y: number,
    z: number,
    sceneId: number,
    name: string,
    description: string,
    videoUrl: string

}
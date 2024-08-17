package trabalho_2bimestre.trabalho_2bimestre.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import trabalho_2bimestre.trabalho_2bimestre.model.dto.AutorDTO;
import trabalho_2bimestre.trabalho_2bimestre.service.AutorService;

import java.util.List;

@RestController
@RequestMapping("/autores")
public class AutorController {

    @Autowired
    private AutorService autorService;

    @GetMapping
    public List<AutorDTO> getAll() {
        return autorService.getAll();
    }

    @GetMapping("/{id}")
    public AutorDTO getById(@PathVariable Long id) {
        return autorService.getById(id);
    }

    @PostMapping
    public AutorDTO create(@RequestBody AutorDTO autorDTO) {
        return autorService.create(autorDTO);
    }

    @PutMapping("/{id}")
    public AutorDTO update(@PathVariable Long id, @RequestBody AutorDTO autorDTO) {
        return autorService.update(id, autorDTO);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        autorService.delete(id);
    }
}

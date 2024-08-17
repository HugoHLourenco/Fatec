package trabalho_2bimestre.trabalho_2bimestre.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trabalho_2bimestre.trabalho_2bimestre.model.dto.AutorDTO;
import trabalho_2bimestre.trabalho_2bimestre.model.entities.Autor;
import trabalho_2bimestre.trabalho_2bimestre.model.repository.AutorRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AutorService {

    @Autowired
    private AutorRepository autorRepository;

    public List<AutorDTO> getAll() {
        return autorRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public AutorDTO getById(Long id) {
        return autorRepository.findById(id).map(this::convertToDto).orElse(null);
    }

    public AutorDTO create(AutorDTO autorDTO) {
        Autor autor = convertToEntity(autorDTO);
        autor = autorRepository.save(autor);
        return convertToDto(autor);
    }

    public AutorDTO update(Long id, AutorDTO autorDTO) {
        Autor autor = convertToEntity(autorDTO);
        autor.setId(id);
        autor = autorRepository.save(autor);
        return convertToDto(autor);
    }

    public void delete(Long id) {
        autorRepository.deleteById(id);
    }

    private AutorDTO convertToDto(Autor autor) {
        AutorDTO autorDTO = new AutorDTO();
        autorDTO.setId(autor.getId());
        autorDTO.setNome(autor.getNome());
        autorDTO.setNacionalidade(autor.getNacionalidade());
        return autorDTO;
    }

    private Autor convertToEntity(AutorDTO autorDTO) {
        Autor autor = new Autor();
        autor.setNome(autorDTO.getNome());
        autor.setNacionalidade(autorDTO.getNacionalidade());
        return autor;
    }
}
